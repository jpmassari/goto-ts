import { goto, goto_block } from 'goto'

const temp = () => {
    let i = 0;
    goto_block([
        ["loop", () => {
            if(i >= 10) goto("out");
            console.log(`hello world ${i}`);
            i++;
            goto("loop");
        }],
        ["out", () => console.log("DONE")],
    ])
}

temp()