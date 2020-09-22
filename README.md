# Clinical Brain Lab Website

This repository contains the code to host the Clinical Brain Lab website: https://clinicalbrainlab.github.io ✨

## Getting Started with GitHub :memo:
- Create an account for yourself (*use a simple login like FirstnameSurname*)
- [Github Guides](https://guides.github.com/)
- [How to use Github to contribue](https://neurokit2.readthedocs.io/en/latest/contributing/contributing.html#how-to-use-github-to-contribute)
- [How to create a Pull Request](https://www.earthdatascience.org/courses/intro-to-earth-data-science/git-github/github-collaboration/how-to-submit-pull-requests-on-github/)
- [Github Cheatsheet](https://github.com/tiimgreen/github-cheat-sheet)
- [Markdown Introduction](https://guides.github.com/features/mastering-markdown/)
  - Note that on GitHub, we write in **markdown**, which is a set of conventions allowing to quickly and easily format text (e.g., text in bold, italic, titles, etc.).


## Setting up your Profile :woman: :man:

- **Step 1: Fork the website repository**
  - Hit the **fork** button at the top right corner to make a *copy* of the repository in your Github account.

    ![fork](https://github.com/neuropsychology/Onboarding/blob/master/img/fork-repo.png)

   -  After a few minutes of waiting, you should now see a repository with a name of `your-username/clinicalbrainlab.github.io`.

 - **Step 2: Add your profile to the website**
   - In your newly *copied* repository, navigate to the folder `your-username/clinicalbrainlab.github.io/content`. This is where all the concent of the website is stored.
   - Can you guess which file is the one storing the profiles of our lab members? By intuition or by try-and-error, you should now click on the file `people` folder and look for the *.Rmd* file that you belong to (e.g. Research Fellows, Undergraduate Student etc). The extension *.Rmd* stands for **markdown** (or more specifically **R markdown** here). Don't worry too much if you are not familiar with the term. Read on!
   - By reading through the `.Rmd` file, you can see that it's just like any another word document (except more powerful ^^). The "#" is used to create the sections. You should now click on the *pencil* symbol at the top of the document to start editing.
   - If you can't find a *.Rmd* file in the `people` folder that accurately captures your role in the lab, do not hesitate to create a new one!
   - Now, you can simply look at what is being written under the name of other members, copy it, and customize the section to make it yours!

  - **Step 3: Add your profile picture**
    - The very last step for you to customize your profile is to add a picture of yourself. Did you see this strange-looking line `<img src="/img/someone-name.jpg" alt="someone-name" width="25%" align="left" hspace=20" vspace="20"><br />`? This line helps to add your picture to your profile.
    - Look for that one picture of yourself that you look the most amazing and upload it to the `your-username/clinicalbrainlab.github.io/static/img` folder. You can name the file with a simple name e.g. your-name 😊
    - Go back to the `people.Rmd` file and in that strange-looking line, replace `someone-name.jpg` with the name of your picture file and its extension. So that it knows where to look for your picture.

  - **Step 4: Make a Pull Request**
    - You are almost finished! Go back to `your-username/clinicalbrainlab.github.io` main page to look for the *Pull Rquest* sign. Click on it.

      ![PR](https://github.com/neuropsychology/Onboarding/blob/master/img/PR.png)

    - The page will show that you are trying to make a Pull Request from **your** repositorty *"your-username/clinicalbrainlab.github.io"* to the **original** repository *clinicalbrainlab/clinicalbrainlab.github.io"*. Please make sure that the base is `sources`.
    - All the left for you to do is to click on that shiny green button to update your changes to the original repository.

Congratulations! You have successfully updated your profile on our website!



## To-Do: Migrate content of website to new Academic Hugo Theme :heavy_check_mark:

- [x] Backbone of the website
- [x] Finalize lab members' profiles
- [ ] Add alumni list (for a new page, not to be shown on home)
- [ ] Finalize full list of publications
- [ ] Projects, research themes and participants recruitment to be together
- [x] Finalize `Contact` section
- [x] Update `Join` section
- [ ] Add a gallery

