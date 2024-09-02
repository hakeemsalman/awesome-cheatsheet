# Command line tool

## Chapter Overview

- The ability to build Command Line Interfaces (CLIs) is a useful skill. Building simple tools that are relevant to technology stacks and business logic within an organization for manual interaction with a system, is a key use case. A small CLI is trivial to build in Node, and we can access the entire JavaScript ecosystem to rapidly build any functionality we might need. In this chapter we are going to build a back-office CLI that interacts with the web service we worked on in previous chapters. As we run commands in the CLI, it will update state in our back-end web service, which will then be reflected in the web app.

## Learning Objectives

- By the end of this chapter, you should be able to:
  - Explain how to scaffold a CLI app.
  - Apply approaches for handling flags and positional arguments.
  - Implement colors, prompts and terminal-based form controls.

## Creating a Command Line Tool (1)

- We are going to build-out a simple command line tool that makes a POST request to the `/orders/{ID}` endpoint that we implemented in the last section of Chapter 3.
- We will need to make a new folder in a project root, which we will call `my-cli`. We can create it in the project root with the following command:
```bash
$ mkdir my-cli
```

