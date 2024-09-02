# Basics

- JavaScript is ubiquitous and Node.js is an asynchronous, event-driven, JavaScript runtime. Software engineers from all backgrounds have touched JavaScript at some point. Using a common-place, easy-to-learn language as the basis of a runtime environment for manipulating machine I/O has some interesting and wide-ranging productivity benefits.


## Objectives

- Rapidly build command line tools.
- Rapidly mock RESTful JSON APIs.
- Rapidly prototype real-time services.
- Discover and use ecosystem utilities.

## Installing Node usng fnm

```bash
# fnm installation command and link for github fnm is https://github.com/Schniz/fnm.
$ curl -fsSL ht‌tps://fnm.vercel.app/install | bash

# check fnm version
$ fnm --version

# If encountered error, "a command 'fnm' not found"
$ export PATH="$HOME/.local/share/fnm:$PATH"

# Nodejs installation command lts(Long Term Support)
$ fnm install --lts

# Installs latest version
$ fnm install --latest

# check node version
$ node -v
```


## .nvmrc File

To "pin" a specific Node.js version for your project, you need to create a `.nvmrc` file in the root of your project directory.

1. Open a text editor in the root of your project directory.
2. Create a new file and save it as `.nvmrc` (including the leading dot).
3. In the `.nvmrc` file, specify the Node version you want to use for your project. You can find the desired version by visiting the official Node.js website and looking for the Long-Term Stable (LTS) or the latest version. For example, you can simply write v18.16.0 in the `.nvmrc` file.
4. Save the `.nvmrc` file and close the text editor.
5. Once you have created the `.nvmrc` file with the desired Node version, you can use the following command to install and set that specific Node version for your project:

```
$ fnm use --version-file-strategy local
```

This command will read the `.nvmrc` file in your project directory and install the specified Node version, ensuring that it is used for your project.

> > Remember to always commit and share the `.nvmrc` file with your project collaborators, so everyone is using the same Node version.

```console
Q. What is the recommended approach to installing Node?
A. Version managers provide cross-platform consistency and industry standard conventions. They also tend to keep up with the latest releases whereas OS package managers can lag behind.


Q.Aside from the Node binary, what else does a Node installation provide?
A. Node comes with the npm package manager for installing ecosystem dependencies.
```

