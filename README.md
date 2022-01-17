# Fitcrafter project

## Requirements
    - npm
    - node.js
    - yarn
    - expo
    - python interpreter

## How to run server

- Get to know your current ip adress and paste add it to `ALLOWED_HOSTS` in backend/backend/settings.py as in example:
    ```
    ALLOWED_HOSTS = [
    '192.168.100.3',
    '192.168.55.10', 
    '192.168.56.1', 
    '127.0.0.1', 
    '192.168.1.4']
    ```
- Add this ip to  `BaseApi.js` in the place of <IP>:
    ```
    const baseURL = 'http://<IP>:8000/api/'
    ```
- Add this ip to  `TokenApi.js` in the place of <IP>:
    ```
    const baseURL = 'http://<IP>:8000/api/'
    ```
### Inside the command prompt

```
    cd backend
    python manage.py runserver <IP>:8000
```

Then you can click on the generated link to open web browser.


## How to run the app

1. Open expo go on your phone
2. Make sure that your phone is connected to the same wifi as your computer
3. In the new terminal type:
    ```
    cd frontend
    expo start
    ```
4. Scan generated QR code with your phone and wait for app to load

## License

BSD 3-Clause License

Copyright (c) 2021-present, Fit Crafter Group All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.