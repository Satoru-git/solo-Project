/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('post').del();
  await knex('post').insert([
    {
      post_id: 1,
      post_text: 'I came to the snowy mountains to refresh myself.',
      post_imgPath: 'https://ibb.co/M5W2jwc',
      post_date: new Date(),
    },
    {
      post_id: 2,
      post_text: 'I came to the snowy mountains to refresh myself.',
      post_imgPath: 'https://ibb.co/M5W2jwc',
      post_date: new Date(),
    },
    {
      post_id: 2,
      post_text: "Spiderman costumes weren't that popular.",
      post_imgPath: 'https://ibb.co/M7Gfcck',
      post_date: new Date(),
    },
  ]);
};
