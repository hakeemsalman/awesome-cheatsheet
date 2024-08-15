- [Objectives](#objectives)
  - [Agenda](#agenda)
    - [1. Google Cloud console](#1-google-cloud-console)
    - [2. Understanding projects](#2-understanding-projects)
      - [Projects are the basis for utilizing Cloud services](#projects-are-the-basis-for-utilizing-cloud-services)
      - [Project attributes vary in uniqueness and immutability](#project-attributes-vary-in-uniqueness-and-immutability)
      - [Resource Manager manages Projects](#resource-manager-manages-projects)
    - [4. Google Cloud Billing](#4-google-cloud-billing)
    - [5. Install and configure the Cloud SDK](#5-install-and-configure-the-cloud-sdk)
    - [5. Cloud Shell provides command line access to resources](#5-cloud-shell-provides-command-line-access-to-resources)
      - [**List command Line shell**](#list-command-line-shell)
      - [**SETTINGS ENVIRONMENT VARIABLES**](#settings-environment-variables)
      - [**Creating a virtual machine with the gcloud tool**](#creating-a-virtual-machine-with-the-gcloud-tool)
      - [**Filtering command-line output**](#filtering-command-line-output)
      - [**Connecting to your VM instance**](#connecting-to-your-vm-instance)
    - [6. Cloud APIs](#6-cloud-apis)
    - [7. Mobile App](#7-mobile-app)


# Objectives

1. Explore the Google Cloud console.
2. Examine how projects are the basis for enabling and using Google Cloud services.
3. Identify how billing works in Google Cloud.
4. Install and configure the Cloud SDK.
5. Recognize the different use cases for using Cloud Shell and the Cloud Shell code editor.
6. Explore how APls work.
7. Manage Google Cloud services from a mobile device.

## Agenda

1. The Google Cloud console
2. Understanding projects
3. Google Cloud billing
4. Install and configure the Cloud SDK
5. Cloud Shell
6. Lab: A Tour of Google Cloud Hands-on Labs Hands-on Labs
7. Lab: Getting Started with Cloud Shell and gcloud
8. Google Cloud APis
9. The Cloud Mobile App
10. Quiz
11. Summary


### 1. Google Cloud console

- The Google Cloud console:
  - It is Google Cloud’s Graphical User Interface (GUI), helps you deploy, scale, and diagnose production issues in a simple web-based interface.
  - Easily find your resources, check their health, have full management control over them, and set budgets to control how much you spend on them.
  - It provides a search facility to quickly find resources and connect to instances through SSH, which is the Secure Shell Protocol, in the browser.
  - To access the console, navigate to `console.cloud.google.com.`
  
### 2. Understanding projects

- **Resources are hierarchical**
  - ![alt text](./assets/resources%20are%20hierarchical.png)
  - At the **first level** are resources:
    - These represent **virtual machines**, **Cloud Storage buckets**, tables in **BigQuery**, or anything else in Google Cloud.
  - At the **Second** level
    - projects
  - At the **Third Level**
    - Folder or sub-folders
  - at the **top level**
    - is an organization node

#### Projects are the basis for utilizing Cloud services

- Projects are separate entities under the Organization node
- Projects hold resources, each of which belongs to just one Project
- Projects can have different owners and users
- Projects are billed separately

#### Project attributes vary in uniqueness and immutability

|                      Project ID                      |    Project Name    |         Project Number         |
|:----------------------------------------------------:|:------------------:|:------------------------------:|
|                    Globally unique                   | Need not be unique |         Globally unique        |
| Assigned by Google Cloud but mutable during creation |    Chosen by you   | Assigned by assigned by Google |
|               Immutable after creation               |       Mutable      |            Immutable           |

#### Resource Manager manages Projects

**Google Cloud has the Resource Manager tool:**

- Gather a list of projects
- Create new projects
- Update existing projects
- Delete projects
- Recover previously deleted projects
- Access through RPC API and REST API

- ![alt text](./assets/GC%20folders%20node.png)

### 4. Google Cloud Billing

**How billing works**

- Billing is established at the project level.
- A billing account can be linked to zero or more projects.
- Billing accounts are charged automatically and invoiced every month, or at every threshold limit.
- Billing sub accounts can be used to separate billing by project.

**Billing tools help to budget and monitor usage**

- Budgets
  - A budget can be a fixed limit, or it can be tied to another metric - for example, a percentage of the previous month’s spend.
- Alerts
  - To be notified when costs approach your budget limit, you can create an alert.
- Reports
  - Reports is a visual tool in the Google Cloud console that lets you monitor expenditure based on a project or services.
- Quotas
  - Google cloud also implements quotas, which are designed to prevent the over-consumption of resources because of an error or a malicious attack, protecting both account owners and the Google Cloud community as a whole.
  - **Quotas are allocated at project level**
    - **Rate Quota :** Resets after a specific time.
      - by default, the GKE service implements a quota of 1,000 calls to its API from each Google Cloud project every 100 seconds. After that 100 seconds, the limit is reset.
    - **Allocation Quota :** Governs the number of resources in a project.
      - Allocation quotas govern the number of resources you can have in your projects.
      - For example, by default, each Google Cloud project has a quota allowing it no more than 5 Virtual Private Cloud networks
- Cloud Pricing Calculator at `cloud.google.com/products/calculator`.

### 5. Install and configure the Cloud SDK

**Cloud SDK is a collection of command line tools**

- Set of tools to manage resources and applications hosted on Google Cloud
- Includes:
  - **gcloud CLI** - Provides the main command-line interface for Google Cloud products and services
  - **gsutil** - Provides access to Cloud Storage from the command line
  - **bq** - A command-line tool for BigQuery

**Steps to install Google SDk**

- Go to [cloud.google.com/sdk](https://www.cloud.google.com/sdk) and download the **SDK**.
- Then install the SDK and follow the steps to install.
- Open command line `cmd` window and run this `gcloud init`
- You will be prompted for information including your **login credentials**, **default project**, and **default region and zone**.


### 5. Cloud Shell provides command line access to resources

- Provides command-line access to cloud resources directly from a browser
- Debian-based virtual machine with a persistent 5-GB home directory
- The Cloud SDK cloud command and other utilities are always installed, available, up to date, and fully authenticated

#### **List command Line shell**
----

1. You can list the active account name with this command: `gcloud auth list`
2. You can list the project ID with this command: `gcloud config list project`

- | Western US |	Central US | 	Eastern US |	Western Europe |	Eastern Asia |
  |:---:|:---:|:---:|:---:|:---:|
  | us-west1-a |	us-central1-a |	us-east1-b |	europe-west1-b |	asia-east1-a |
  | us-west1-b |	us-central1-b |	us-east1-c |	europe-west1c |	asia-east1-b |
  | -	| us-central1-c |	us-east1-d |	europe-west1-d |	aisia-east1-c |
  | - |	us-central1-f |	-	| -	| -|
3. Set the region to <YOUR_REGION>: `gcloud config set compute/region <REGION>`
4. To view the project region setting: `gcloud config get-value compute/region`
5. Set the zone to <YOUR_ZONE>: `gcloud config set compute/zone ZONE`
6. To view the project zone setting: `gcloud config get-value compute/zone`
7. to view the project id for your project:`gcloud config get-value project`
8. to view details about the project: `gcloud compute project-info describe --project $(gcloud config get-value project)`

#### **SETTINGS ENVIRONMENT VARIABLES**

1. Create an environment variable to store your Project ID: `export PROJECT_ID=$(gcloud config get-value project)`
2. Create an environment variable to store your Zone: `export ZONE=$(gcloud config get-value compute/zone)`
3. To verify that your variables were set properly: `echo -e "PROJECT ID: $PROJECT_ID\nZONE: $ZONE"`

#### **Creating a virtual machine with the gcloud tool**

1. To create your VM: `gcloud compute instances create gcelab2 --machine-type e2-medium --zone $ZONE`
    - Command details:
      - `gcloud compute` allows you to manage your Compute Engine resources in a format that's simpler than the Compute Engine API.
      - `instances create` creates a new instance.
      - `gcelab2` is the name of the VM.
      - The `--machine-type` flag specifies the machine type as e2-medium.
      - The `--zone` flag specifies where the VM is created.
      - If you omit the `--zone` flag, the `gcloud` tool can infer your desired zone based on your default properties. Other required instance settings, such as `machine type` and `image`, are set to default values if not specified in the `create` command.

- View the list of configurations in your environment: `gcloud config list`
- To see all properties and their settings: `gcloud config list --all`
- List your components: `gcloud components list`

#### **Filtering command-line output**

1. List the compute instance available in the project: `gcloud compute instances list`
2. `gcloud compute instances list --filter="name=('gcelab2')"`
3. `gcloud compute firewall-rules list --filter="network='default'"`
4. `gcloud compute firewall-rules list --filter="NETWORK:'default' AND ALLOW:'icmp'"`


#### **Connecting to your VM instance**

1. To connect to your VM with SSH: `gcloud compute ssh gcelab2 --zone $ZONE`
2. Install nginx web server on to virtual machine: `sudo apt install -y nginx`


### 6. Cloud APIs

**APIs allow code to be written to control Google Cloud services.**

- Google Cloud services offer APls that code to be written to control them
- The Google APls Explorer shows what APls are available, and in what versions
- Google provides Cloud Client and Google API Client libraries
  - Languages currently represented: Java, Python, PHP, C#, Go, Node.js, Ruby and C++.

### 7. Mobile App

- Start, stop, and use SSH to connect into Compute Engine instances, and see logs
- Stop and start Cloud SQL instances
- Administer applications deployed on App Engine
- Up-to-date billing information for projects and alerts for those going over budget
- Customizable graphs showing key metrics
- Alerts and incident management
- [https://cloud.google.com/console-app](https://cloud.google.com/console-app)