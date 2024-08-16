# Cloud Source Repositories: Qwik Start

- Activate: `gcloud auth list`


## Task 1. Create a new repository

- Start a new session in Cloud Shell and run the following command to create a new Cloud Source Repository named REPO_DEMO:
  - `gcloud source repos create REPO_DEMO`

## Task 2. Clone the new repository into your Cloud Shell session

- Clone the contents of your new Cloud Source Repository to a local repo in your Cloud Shell session:
  - `gcloud source repos clone REPO_DEMO`

## Task 3. Push to the Cloud Source Repository

1. Go into the local repository you created:
   1. `cd REPO_DEMO`
2. Run the following command to create a file `myfile.txt` in your local repository:
   1. `echo 'Hello World!' > myfile.txt`
3. Commit the file using the following Git commands:
   1. `git config --global user.email "you@example.com"`
   2. `git config --global user.name "Your Name"`
   3. `git add myfile.txt`
   4. `git commit -m "First file using Cloud Source Repositories" myfile.txt`
4. Once you've committed code to the local repository, add its contents to Cloud Source Repositories using the `git push` command:
   1. `git push origin master`
5. Git pushes the sample application files from the `master` branch to the `origin` remote:
   1. ```bash
      Enumerating objects: 3, done.
      Counting objects: 100% (3/3), done.
      Writing objects: 100% (3/3), 247 bytes | 0 bytes/s, done.
      Total 3 (delta 0), reused 0 (delta 0)
      To https://source.developers.google.com/p/qwiklabs-gcp-ba5b4dcd/r/REPO_DEMO
      * [new branch]      master -> master
      ```

## Task 4. Browse files in the Google Cloud Source Repository

- Use the Google Cloud Source Repositories source code browser to view repository files. You can filter your view to focus on a specific branch, tag, or comment.

1. Run the command to list the Repositories:
   1. `gcloud source repos list`
      1. Click on the `URL` to browse the sample files you pushed to the repository. The console shows the files in the master branch at the most recent commit.

## Task 5. View a file in the Google Cloud repository

1. From the Console, open the **Navigation menu** (Navigation menu) > **View All Products**. Under **CI/CD section**, click **Source Repositories**.
2. Click `REPO_DEMO` > `myfile.txt` to view the file's contents in the source code browser.