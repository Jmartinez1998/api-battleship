'use strict'

/*
|--------------------------------------------------------------------------
| UserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Database = use('Database')
const Hash = use('Hash')

const Factory = use('Factory')

class UserSeeder {
  async run () {
    const enctyptedAdminPsw = await Hash.make('Admin123456')
    const encryptedPassword = await Hash.make('12345678')
    await Database.table('users').insert([
      {
        id: 1,
        username: 'Jose Luis',
        email: 'pepe@gmail.com',
        password: enctyptedAdminPsw,
      }
    ])
  }
}

module.exports = UserSeeder
