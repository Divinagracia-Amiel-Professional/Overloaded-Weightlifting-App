import { appSchema, tableSchema } from '@nozbe/watermelondb'

const sampleSchema = appSchema ({
    version: 1,
    tables: [
        tableSchema({
            name: 'sampleSchema',
            columns: [
                { name: 'a', type: 'string'},
                { name: 'b', type: 'string'},
            ],
        })
    ]
})

export default sampleSchema