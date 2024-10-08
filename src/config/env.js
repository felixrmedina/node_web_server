//require('dotenv').config()
import env from 'dotenv'
//const {get}=require('env-var');
import envvar from 'env-var'

export const envs={
    PORT: envvar.get('PORT').default(3000).asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}
