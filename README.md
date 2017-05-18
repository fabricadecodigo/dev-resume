# Dev resume
Web resume generator to developers where you can put your skills, social media and you have a contact form using https://formspree.io/.

# About the ideia
This project was created based in the idea from [Wendell Adriel.](https://github.com/WendellAdriel)

You can access him project in the repository: [https://github.com/WendellAdriel/dev-curriculum](https://github.com/WendellAdriel/dev-curriculum)

All credits abaout the ideia for [Wendell Adriel.](https://github.com/WendellAdriel)

# About the project

This project was created using Angular 2, less, gulp and Angular CLI.

# How to use

**Step 1: Fork this repository**

Fork this repository in your account and change the repository name to your name


**Step 2: Configuring the GitHub Pages**

On the section **GitHub Pages** select the opion **"master branch /docs folder"** in the field source and click in save.

**Step 3: Install dependencies**

- Run the command: **_npm install_**


**Step 4: Customizing with your data**

To modify you data you can open the class **src/app/resume.ts**, change the values in constructor method and save.


**Step 5: Customizing the appearance**

To modify the colors you can open the file **src/assets/less/variables.less**, change with your preference.
- Run the command: **_gulp less_** to generate the file devresume.css
- Run the command **_gulp minify-css_** to generate the file devresume.min.css


** Step 6: Run**

To run the project to you test the changes whate you are doing:
- Run the command: **_ng serve_**


** Step 7: Generate production version**

To generate production version in the docs folder:
- Run the command: **_ng build --prod_**


** Step 8: Finish**

To finish commit and push.


# Contributing

Feel free to contribute to the progress of this project.

**To bugs and new features use the [issues](https://github.com/fabricadecodigo/dev-resume/issues).**

# License

The theme is available as open source under the terms of the MIT License.
