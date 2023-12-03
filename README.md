<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="goto-ts"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">goto-ts</h3>

  <p align="center">
    goto implementation in typescript
    <br />
    <br />
    <br />
  </p>
</div>

<!-- GETTING STARTED -->
<!-- USAGE EXAMPLES -->
## Usage

import { goto, goto_block} from goto
<br>
const temp = () => {
<br>
    let i = 0;
<br>
    goto_block([
<br>    
        ["loop", () => {
<br>
            if(i >= 10) goto("out");
<br>
            console.log(`hello world ${i}`);
<br>
            i++;
<br>
            goto("loop");
<br>
        }],
<br>
        ["out", () => console.log("DONE")],
<br>
    ])
<br>
}
<br>
<br>
<br>
### Installation

Install NPM packages
   ```sh
   npm install goto-ts
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
