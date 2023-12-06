
<a name="goto-ts"></a>

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h1 align="center">goto-block</h1>

  <p align="center">
    goto implementation in typescript
    <br />
    <br />
    <br />
  </p>
</div>


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

Install NPM packages
   ```sh
   npm install goto-block
   ```

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

