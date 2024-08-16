https://www.cloudskillsboost.google/games/5384/labs/34962

# Running Windows Containers on Compute Engine

## Task 1. RDP into the Windows VM

1. From the **Navigation menu** click on **Compute Engine**. Here you'll see a Windows VM provisioned for you.
2. Click the **RDP button** next to the **windows-instance** instance or you can use any Remote Desktop client Tools (or use your own RDP client if you like).
3. Use the following credentials to complete the RDP login:
   1. User name: `demouser`
   2. Password: `P@ssw0rd`
4. Enter `Command Prompt` in the Type here to search box, right-click on `Command Prompt`, and then select `Run as administrator`.
5. Run this command `docker images`
   

## Task 2. Create a Windows container app

- For the app inside the Windows container, use an IIS Web Server. IIS has an image for Windows Server 2019. You can use the image as is and it will serve the default IIS page, but fot this lab, do something more interesting and have IIS serve a page you define.

- Your folder and file structure should look like:
  - ```bash
    C:\my-windows-app>dir /s /b
    C:\my-windows-app\content
    C:\my-windows-app\Dockerfile
    C:\my-windows-app\content\index.html
    ```

1. Create a folder called `my-windows-app` and enter into the directory:
   1. `mkdir my-windows-app`
   2. `cd my-windows-app`
2. Create folder named `content`, a file named `index.html` within it:
   1. `mkdir content`
   2. `call > content\index.html`
3. Edit the dockerfile:
   1. `notepad content\index.html`
4. Add the following content in `index.html`:
   1. ```html
      <html>
        <head>
          <title>Windows containers</title>
        </head>
        <body>
          <p>Windows containers are cool!</p>
        </body>
      </html>
      ```
5. Save the `index.html`

## Task 3. Build Docker image

1. Create a Dockerfile for the Docker image:
   1. `call > Dockerfile`
2. Edit the dockerfile:
   1. `notepad Dockerfile`
      1. You're using the IIS Container image version compatible with Windows Server 2019.
3. Add the following contents in the Dockerfile:
   1. ```dockerfile
      FROM mcr.microsoft.com/windows/servercore/iis:windowsservercore-ltsc2019

      RUN powershell -NoProfile -Command Remove-Item -Recurse C:\inetpub\wwwroot\*

      WORKDIR /inetpub/wwwroot

      COPY content/ .
      ```
4. Save the `Dockerfile`.
5. Build the Docker image and tag it with Google Container Registry (GCR) and your project id. This will be useful when we push the image to GCR later (replace dotnet-atamel with your GCP Project ID):
   1. `docker build -t gcr.io/dotnet-atamel/iis-site-windows .`
6. Once the Docker image is built, you can see it along with its IIS dependency:
   1. `docker images`

## Task 4. Run the Windows container

1. Inside Command Prompt, run the container and expose it on port 80 (replace dotnet-atamel with your GCP Project ID):
   1. `docker run -d -p 80:80 gcr.io/dotnet-atamel/iis-site-windows`
2. You can check that the container is running:
   1. `docker ps`
3. To see the web page, go to the **External IP** column of Compute Engine instance and simply open it with HTTP in the browser:

## Task 5. Cleanup

1. Type `exit` to leave the VM.
2. Close the RDP window by clicking the X in the top right corner and confirm that you want to be disconnected.

> When you are done with experimenting with Windows containers, it is a good idea to either stop or delete the VM you created.

3. To delete the VM, go back to the Console and click the three dots in the right-hand menu and select **Delete**.

