export const goto = (name: string) => { throw name }

export const goto_block = (blocks: [string, () => void][]): void => {
    const goto_block_impl = (name?: string): void => {
        try {
            const exec = (blocks: [string, () => void][]): void => {
                let i = 0;
                while (i < blocks.length) {
                    blocks[i]![1]();
                    i = i + 1;
                } 
            }
            const skip = (blocks: [string, () => void][], entry: string) => {
                    if (blocks.length === 0) return;
                    if (blocks[0]![0] === entry) exec(blocks);
                    else {
                        blocks.shift();
                        skip(blocks, entry);                 
                    }
            }
            switch(name) {
                case undefined: exec(blocks); break;
                case name!: skip(blocks, name); break;
            }
        } catch(e: any) {
            goto_block_impl(e);
        }
    }

    goto_block_impl();
};
