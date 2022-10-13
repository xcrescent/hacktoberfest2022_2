# Contribute in Hacktoberfest 2022

<img width="2400" alt="Email Banners-Dark" src="https://user-images.githubusercontent.com/101466378/195473437-fb8002f4-5f26-4733-a7ec-2ae105d379a6.png">

HACKTOBERFEST IS DIGITALOCEAN’S ANNUAL EVENT THAT ENCOURAGES PEOPLE TO CONTRIBUTE TO OPEN SOURCE THROUGHOUT OCTOBER. MUCH OF MODERN TECH INFRASTRUCTURE—INCLUDING SOME OF DIGITALOCEAN’S OWN PRODUCTS—RELIES ON OPEN-SOURCE PROJECTS BUILT AND MAINTAINED BY PASSIONATE PEOPLE WHO OFTEN DON’T HAVE THE STAFF OR BUDGETS TO DO MUCH MORE THAN KEEP THE PROJECT ALIVE. HACKTOBERFEST IS ALL ABOUT GIVING BACK TO THOSE PROJECTS, SHARPENING SKILLS, AND CELEBRATING ALL THINGS OPEN SOURCE, ESPECIALLY THE PEOPLE THAT MAKE OPEN SOURCE SO SPECIAL.

FOR THE PAST 9 YEARS, THOUSANDS OF PEOPLE—CODERS AND NON-CODERS ALIKE—HAVE PARTICIPATED IN HACKTOBERFEST TO SUPPORT THE PROJECTS THEY USE AND LOVE, LEARN AND PRACTICE SKILLS THAT WILL ENHANCE THEIR CAREERS, AND MEET NEW PEOPLE WHO LOVE OPEN SOURCE AS MUCH AS THEY DO.

* Prepare and share your project for collaboration
* Contribute to the betterment of a project via pull requests
* Organize an event
* Mentor others
* Donate directly to open source projects

<br>

# Add some code

Add your code into the repository for Hactoberfest.

# Contents of the Webpage

1. index.html - Contains the content of the main/home page.
2. style.css -  Contains the styling given to the  home page.
3. app.js -  Contains the magic given to the  home page.


# How can you contribute
To contribute in Hacktoberfest2022, checkout the given link and win hactoberfest t-shirt ...
https://hacktoberfest.digitalocean.com/


And That's It!
Follow these steps to make your very first Pull request.


## Rules :fire:
To qualify for the __official limited edition Hacktoberfest shirt__, you must register [here](https://hacktoberfest.digitalocean.com/) and make four Pull Requests (PRs) between October 1-31, 2022 (in any time zone). PRs can be made to any public repo on GitHub, not only the ones with issues labeled Hacktoberfest. This year, the __first 40,000__ participants who complete the challenge will earn a T-shirt.

## Steps to follow :scroll:

### Tip: Complete this process in GitHub (in your browser)

```mermaid
flowchart LR
    Fork[Fork the project]-->branch[Create a New Branch]
    branch-->Edit[Edit file]
    Edit-->commit[Commit the changes]
    commit -->|Finally|creatpr((Create a Pull Request))
    
 ```

### 0. Star The Repo :star2:

Star the repo by pressing the topmost-right button to start your wonderful journey.

### 1. Fork it :fork_and_knife:

You can get your own fork/copy of [1_Hacktoberfest-22](https://github.com/Apoorv-cloud/1_Hacktoberfest-22) by using the <a href="https://github.com/Apoorv-cloud/1_Hacktoberfest-22"><kbd><b>Fork</b></kbd></a> button.


### 2. Clone it :busts_in_silhouette:

`NOTE: commands are to be executed on Linux, Mac, and Windows(using Powershell)`

You need to clone or (download) it to a local machine using

```sh
$ git clone https://github.com/{Your_Username}/1_Hacktoberfest-22.git 
```

> This makes a local copy of the repository in your machine.
Once you have cloned the `1_Hacktoberfest-22` repository in Github, move to that folder first using the change directory command on Linux, Mac, and Windows(PowerShell to be used).
```sh
# This will change the directory to a folder Random-Joke-Generator
$ cd 1_Hacktoberfest-22
```

Move to this folder for all other commands.

### 3. Set it up :arrow_up:

Run the following commands to see that *your local copy* has a reference to *your forked remote repository* in Github :octocat:

```sh
$ git remote -v
origin  https://github.com/Your_Username/1_Hacktoberfest-22.git (fetch)
origin  https://github.com/Your_Username/1_Hacktoberfest-22.git (push)
```

Now, let's add a reference to the original [1_Hacktoberfest-22](https://github.com/Apoorv-cloud/1_Hacktoberfest-22) repository using

```sh
$ git remote add upstream https://github.com/Apoorv-cloud/1_Hacktoberfest-22
```

> This adds a new remote named ***upstream***.  (Optional)
See the changes using
```sh
$ git remote -v
origin    https://github.com/Your_Username/1_Hacktoberfest-22.git (fetch)
origin    https://github.com/Your_Username/1_Hacktoberfest-22.git(push)
upstream  https://github.com/Your_Username/1_Hacktoberfest-22.git (fetch)
upstream  https://github.com/Your_Username/1_Hacktoberfest-22.git (push)
```
In your case, you will see
```sh
$ git remote -V
origin    https://github.com/Your_Username/1_Hacktoberfest-22.git(fetch)
origin    https://github.com/Your_Username/1_Hacktoberfest-22.git (push)
upstream  https://github.com/Your_Username/1_Hacktoberfest-22.git (fetch)
upstream  https://github.com/Your_Username/1_Hacktoberfest-22.git(push)
```

### 4. Sync it :recycle: (Keep syncing)

Always keep your local copy of the repository updated with the original repository.
Before making any changes and/or in an appropriate interval, run the following commands *carefully* to update your local repository.

```sh
# Fetch all remote repositories and delete any deleted remote branches
$ git fetch --all --prune
# Switch to the `main` branch
$ git checkout main
# Reset the local `main` branch to match the `upstream` repository's `main` branch
$ git reset --hard upstream/main
# Push changes to your forked `Random-Joke-Generator` repo
$ git push origin main
```

### 5. Ready Steady Go... :turtle: :rabbit2:

Once you have completed these steps, you are ready to start contributing by checking our `Good First Issue` Issues and creating [pull requests](https://github.com/xcrescent/hacktoberfest2022_2/pulls).

