export const goto = (name: string) => { throw name }

export const goto_block = (blocks: [string, () => void][]): void => {
    const goto_block_impl = (name?: string): void => {
        try {
            const exec = (blocks: [string, () => void][], i:number): void => {
                while (i < blocks.length) {
                    blocks[i]![1]();
                    i = i + 1;
                }
            }
            const skip = (blocks: [string, () => void][], entry: string, i: number) => {
                    if (blocks.length === 0) return;
                    if (blocks[i]![0] == entry) {
                        exec(blocks, i);
                    }
                    else {
                        skip(blocks, entry, i + 1);                 
                    }
            }
            switch(name) {
                case undefined: exec(blocks, 0); break;
                case name!: skip(blocks, name, 0); break;
            }
        } catch(e: any) {
            goto_block_impl(e)
        }
    }

    goto_block_impl()
}