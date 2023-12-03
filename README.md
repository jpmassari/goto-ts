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
<br />
<br />
const temp = () => {
<br/>
<dl>
  <dd>
    let i = 0;
    <br/>
    goto_block ([
        <dl>
          <dd>
            ["loop", () => {
            <dl>
              <dd>
                if(i >= 10) goto("out");
                <br/>
                console.log(`hello world ${i}`);
                <br/>
                i++;
                <br/>
                goto("loop");
                <br />
              </dd>
            </dl>
            }],
            <br />
            ["out", () => console.log("DONE")],
          </dd>
        </dl>
      ])  
  </dd>
</dl>
}
<br />
<br />
<br />

### Installation
<br />
<br />
<br />
Install NPM packages
   ```sh
   npm install goto-ts
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
