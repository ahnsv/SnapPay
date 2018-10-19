// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
import * as $ from 'jquery'
import * as moment from 'moment'
import 'chrome'

let count = 0

$(function() {
  const queryInfo = {
    active: true,
    currentWindow: true,
  }

  chrome.tabs.query(queryInfo, function(tabs) {
    $('#url').text(tabs[0].url)
    $('#time').text(moment().format('YYYY-MM-DD HH:mm:ss'))
  })

  chrome.browserAction.setBadgeText({ text: count.toString() })
  $('#countUp').click(() => {
    chrome.browserAction.setBadgeText({ text: (++count).toString() })
  })

  $('#changeBackground').click(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        {
          color: '#555555',
        },
        function(msg) {
          console.log('result message:', msg)
        }
      )
    })
  })
})
