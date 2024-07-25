---
title: 'How to Report API Errors to Your Backend Team Like a Senior'
description: 'better log system. better life :))'
pubDate: '25 Jul 2024'
heroImage: '/blog/report-api-errors-backend-team.png'
tags: ["log", "api", "report", "productivity"]
---

Ever encountered an API error and struggled to effectively communicate the issue to your backend team? I've created a small code snippet to simplify this process and generate clean, informative reports.

This code snippet logs the following details in a well-formatted manner:

- Response code
- HTTP method
- URL
- Payload
- Response

```ts
// axiosInstance example with good logging for developers

import axios from 'axios';
import { API_PREFIX, API_URL } from '../config';
import { getUserToken } from '../auth';

const userToken = getUserToken();
const headers: any = {};
if (userToken) {
    headers.Authorization = `Bearer ${userToken}`;
}

export const axiosInstance = axios.create({
    headers,
    baseURL: API_URL + API_PREFIX,
    timeout: 20000,
});

axiosInstance.interceptors.response.use(
    (res) => {
        console.log(
            `✅ ${res?.status} ${res?.config?.method.toUpperCase()} ${res?.config?.baseURL + res?.config?.url}`,
            '\n\npayload:',
            res?.config?.data,
            '\n\nresponse:',
            res?.data?.message || '',
            res?.data,
        );
        // console.log(res);
        return res;
    },
    async (err) => {
        console.error(
            `❌ ${err?.response?.status} ${err?.config?.method.toUpperCase()} ${err?.config?.baseURL + err?.config?.url}`,
            '\n\npayload:',
            err?.config?.data,
            '\n\nresponse:',
            err?.response?.data?.message || '',
            err?.response?.data,
        );
  
        return Promise.reject(err);
    },
);
```  

Simply copy and paste this log directly into your bug report for your backend colleagues.

Feel free to star this gist on GitHub if you find it helpful: <https://gist.github.com/imkarimkarim/b4ad8fe78447692a94bae25c93dd61f5>  

While you may need to make minor adjustments to fit your specific project, the core concept remains the same. By following this approach, you can streamline the process of reporting API errors and improve communication with your backend team.
