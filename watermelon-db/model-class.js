import { Model } from '@nozbe/watermelondb' 
import { field } from '@nozbe/watermelondb/decorators'

export default class sampleSchemaModelClass extends Model {
    static table = 'sampleSchema'

    @field('a') a;
    @field('b') b;
} 