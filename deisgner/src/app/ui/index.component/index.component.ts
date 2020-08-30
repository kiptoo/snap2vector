
import { Component, OnInit, ChangeDetectorRef, NgZone } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

declare var $: any;

@Component({
  selector: 'page-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  loggedIn = false;
  filesToUpload: Array<any> = [];
  searchText;
  filesReady: Array<any> = [];
  orders: any = [];
  orderObj: any = null;
  images: Array<any> = [];
  notifications = [
    'Select Message',
    'Your order is now in progress',
    'Your order will be ready to be delivered in 24hours',
    'Your order is ready to be delivered',
    'Your order is stopped due to some reasons'
  ];
  description;

  notifPressed = false;
  deliverPressed = false;
  revRejPressed = false;

  constructor(private commonService: CommonService, private router: Router, private changeDetectorRef: ChangeDetectorRef,
    private zone: NgZone, private slimLoadingBarService: SlimLoadingBarService) { }


  ngOnInit() {
    this.slimLoadingBarService.start(() => {
      console.log('Loading complete');
    });

    $(document).ready(function () {
      $('body').on('click', '#send_notification', function () {
        $('#send_notification_modal').modal();
      });

      $('body').on('click', '#deliver_order', function () {
        $('#deliver_order_modal').modal();
      });

    });

    this.notifications = [
      'Select Message',
      'Your order is now in progress',
      'Your order will be ready to be delivered in 24hours',
      'Your order is ready to be delivered',
      'Your order is stopped due to some reasons'
    ];
    if (localStorage.getItem('designer-session') == null) {
      this.zone.run(() => {
        this.router.navigate(['/login']);
      })
    }

    firebase.auth().onIdTokenChanged((user: firebase.User) => {
      if (user && user.uid) {
        user.getIdToken(false)
          .then((token: any) => {
            this.loggedIn = true;
            this.commonService.getOrders().subscribe(data => {
              let tempData = JSON.parse(data._body);
              this.orders = tempData;
              console.log(this.orders);
              this.changeDetectorRef.detectChanges();
              this.slimLoadingBarService.stop();
            }, err => {
              console.log(err);
              this.slimLoadingBarService.stop();
            })
          });
      } else {
        this.zone.run(() => {
          this.router.navigate(['/login']);
        })
      }
    })
  }

  onChange(description) {
    this.description = description;
  }

  fetchOrders() {
    this.commonService.getOrders().subscribe(data => {
      let tempData = JSON.parse(data._body);
      this.orders = tempData;
      this.changeDetectorRef.detectChanges();
    }, err => {
      console.log(err);
    })
  }

  arrayToString(objArray: any) {
    var names = objArray.map(function (item) {
      return item['name'];
    });
    return names.join()
  }

  getCount(type) {
    if (type == "new") {
      let result = this.orders.filter(obj => {
        return obj.delivered == false && obj.accepted == false && obj.revisionRequested == false;
      });
      return result.length;
    } else if (type == "revision") {
      let result = this.orders.filter(obj => {
        return obj.delivered == false && obj.accepted == false && obj.revisionRequested == true && obj.requireSpecialAction == false;
      });
      return result.length;
    } else if (type == "delivered") {
      let result = this.orders.filter(obj => {
        return obj.delivered == true && obj.accepted == false
      });
      return result.length;
    } else if (type == "completed") {
      let result = this.orders.filter(obj => {
        return obj.accepted == true;
      });
      return result.length;
    }
  }

  getOrders(type) {
    if (type == "new") {
      let result = this.orders.filter(obj => {
        return (obj.delivered == false && obj.accepted == false && obj.revisionRequested == false);
      });
      return result;
    } else if (type == "revision") {
      let result = this.orders.filter(obj => {
        return obj.delivered == false && obj.accepted == false && obj.revisionRequested == true && obj.requireSpecialAction == false;
      });
      return result;
    } else if (type == "delivered") {
      let result = this.orders.filter(obj => {
        return obj.delivered == true && obj.accepted == false
      });
      return result;
    } else if (type == "completed") {
      let result = this.orders.filter(obj => {
        return obj.accepted == true;
      });
      return result;
    }
  }

  send() {
    if (this.description != undefined && this.description != this.notifications[0]) {
      let notificationObj: any = {};
      notificationObj.description = this.description;
      notificationObj.orderId = this.orderObj._id;
      this.notifPressed = true;
      this.commonService.sendNotification(notificationObj).subscribe(data => {
        alert('Notification Sent');
        this.description = this.notifications[0];
        this.notifPressed = false;
      }, err => {
        console.log(err);
        this.description = this.notifications[0];
        this.notifPressed = false;
      })
    }
  }

  selectOrderForDelivery(order: any) {
    this.orderObj = order;
  }

  selectOrderForReqRejection(order: any) {
    this.orderObj = order;
  }

  selectOrderForNotifications(order: any) {
    this.orderObj = order;
  }

  upload() {
    if (this.filesToUpload.length <= 0) {
      alert('Select images to Uplad');
    } else {
      for (let i = 0; i < this.filesToUpload.length; i++) {
        let storeName = Date.now() + '-' + this.filesToUpload[i].name
        var storageRef = firebase.storage().ref("designer_files/" + storeName);

        //Upload file
        var task = storageRef.put(this.filesToUpload[i]);

        //Update progress bar
        task.on('state_changed',
          function progress(snapshot) {

          },
          function error(err) {

          },
          () => {
            var downloadURL = task.snapshot.downloadURL;
            this.deliverPressed = true;
            this.filesReady.push({
              filename: storeName,
              originalname: this.filesToUpload[i].name,
              created: Date.now(),
              url: downloadURL,
              order: this.orderObj._id
            })

            if (i === this.filesToUpload.length - 1) {
              this.commonService.postImages(this.filesReady).subscribe(data => {
                alert("Order Delivered");
                this.deliverPressed = false;
                this.orderObj = null;
                this.fetchOrders();
                // this.zone.run(()=>{
                //   this.router.navigate(['/index']);
                // })
              }, err => {
                alert('Upload Failed');
                this.orderObj = null;
                this.deliverPressed = false;
              })
            }
          }
        );
      }
    }
  }

  revisionReject() {
    this.orderObj.requireSpecialAction = true;
    this.revRejPressed = true;
    this.commonService.revisionReject(this.orderObj).subscribe(data => {
      //this.fetchOrders();
      alert("Revision Request, No Administration will handle this order");
      this.orderObj = null;
      this.revRejPressed = false;
      this.fetchOrders();
      // this.zone.run(()=>{
      //   this.router.navigate(['/index']);
      // })
    }, err => {
      this.orderObj.requireSpecialAction = false;
      this.orderObj = null;
      alert('Rejection failed, try again');
      this.revRejPressed = false;
    })
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

  changeDet() {
    this.changeDetectorRef.detectChanges();
  }
}
