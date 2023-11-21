/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('user_info').del();
  await knex('user_info').insert([
    { User_id: 'Lufy', Salt: 'abc', Hashed: 'Lufyabc' },
    { User_id: 'Zoro', Salt: 'abc', Hashed: 'Zoroabc' },
    { User_id: 'Nami', Salt: 'abc', Hashed: 'Namiabc' },
    { User_id: 'Sanji', Salt: 'abc', Hashed: 'Sanjiabc' },
  ]);
};
