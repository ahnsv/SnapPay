// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
/*
  Displays a notification with the current time. Requires "notifications"
  permission in the manifest file (or calling
  "Notification.requestPermission" beforehand).
*/
function show() {
    new Notification("SnapPay Notification", {
        icon: 'finger_snap.png',
        body: 'SnapPay Available!'
    });
}

// Conditionally initialize the options.
if (!localStorage.isInitialized) {
    localStorage.isActivated = true;   // The display activation.
    localStorage.frequency = 1;        // The display frequency, in minutes.
    localStorage.isInitialized = true; // The option initialization.
}

// Test for notification support.
if (Notification) {
    // While activated, show notifications at the display frequency.
    if (JSON.parse(localStorage.isActivated)) { show(); }

    var interval = 0; // The display interval, in minutes.

    setInterval(function () {
        interval++;

        if (
            JSON.parse(localStorage.isActivated) &&
            localStorage.frequency <= interval
        ) {
            show();
            interval = 0;
        }
    }, 60000);
}