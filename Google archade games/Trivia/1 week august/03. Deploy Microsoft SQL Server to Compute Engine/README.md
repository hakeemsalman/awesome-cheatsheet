# Deploy Microsoft SQL Server to Compute Engine

## Task 1. Deploy Microsoft SQL Server

- Create a new Compute Engine virtual machine instance running Microsoft SQL Server from the Cloud Console.

1. In Cloud Console, click the Menu icon for Navigation menu in the top left of the screen:
2. Then click **Compute Engine:**
3. Then, click **CREATE INSTANCE**.
4. Next, name the new instance `sqlserver-lab`.
5. Choose a zone as `ZONE`.
6. Click `Change` to change the boot disk.
7. Remain in the `Public images` tab:
8. For the operating system, select **SQL Server on Windows Server**. For the version, select **SQL Server 2016 Web on Windows Server 2016 Datacenter.**
9. At the bottom of the window, click **Select**.
10. Click **Create**.

## Task 2. Create a Windows user and password

To RDP into the Windows instance, you must create a Windows user and password.

1. To create them, click the name of your instance, **sqlserver-lab**, to see the instance details.
2. Then, select **Set Windows password**.

This will open a new window where you create a user.

3. Copy and save the default username for later use and select **Set**.

After a few seconds, you should have a **New Windows password** dialog with the newly created password.

4. Click the rectangles alongside the password to copy the password.

## Task 3. Remote desktop (RDP) into the Windows Server

**Not running Windows**

1. If you are not on Windows but are using Chrome, open Spark View extension page in normal window.
1. Click on Add to Chrome. Then, click Launch app button.
1. It opens up a login page, add your VM instance's External IP in Computer field.
1. Then enter your Windows user name and password and click Connect.

**Running Windows**

1. If you are on a Windows machine, download the RDP file by selecting it from the RDP dropdown menu.
1. Double click the RDP file and log in using the Windows user and password.

## Task 4. Run Microsoft SQL Server Management Studio

1. Inside your remote desktop window, click the Start menu, and type Microsoft SQL.
1. Then right click Microsoft SQL Server Management Studio and Run as administrator.

> Note: If you are on a Mac trackpad, try placing two fingers on the trackpad and clicking with your thumb in order to emulate a right-click.
> Note: If you do not run SQL Server Management Studio as administrator the connection will not work.

Microsoft SQL Server Management Studio launches, showing you a Connect to Server window.

1. Click Connect.
1. Then, use the Object Explorer window to examine your new database.