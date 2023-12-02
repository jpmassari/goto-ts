export const goto = (name: string) => { throw name }

export const goto_block = (blocks: [string, () => void][]): void => {
    const goto_block_impl = (name?: string): void => {
        try {
            const exec = (blocks: [string, () => void][]): void => {
                blocks.map((block) => block[1]())
            }
            const skip = (blocks: [string, () => void][], entry: string) => {
                switch (blocks[0]![0]) {
                    case undefined: return;
                    case blocks[0]![0]: {
                        if(blocks[0]![0] === entry) {
                            exec(blocks)
                        } else {
                            skip(blocks.slice(1), entry)
                        }
                    }
                }
            }
        switch (name) {
            case undefined: exec(blocks); break;
            case name!: skip(blocks, name); break;
        }
        } catch(e: any) {
            goto_block_impl(e)
        }
    }
    goto_block_impl()
}