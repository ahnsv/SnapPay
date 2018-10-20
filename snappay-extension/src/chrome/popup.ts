// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

export function getCurrentTabUrl() {
  (callback: any) => {
    let queryInfo = {
      active: true, currentWindow: true
    }
    chrome.tabs.query(queryInfo, (tabs) => {
      callback(tabs[0].url)
    })
  }
}

export function getProductInfo(param: any, callback: any) {
  // TODO: ajax?

}

// chrome.browserAction.setTitle({
  
// })


