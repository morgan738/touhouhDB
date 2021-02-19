'use strict'

const db = require('../server/db')
const {User, Character} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({email: 'cody@email.com', password: '123'}),
    User.create({email: 'murphy@email.com', password: '123'})
  ])

  const character = await Promise.all([
    Character.create({
      name: 'Hakurei Reimu',
      imageURL: 'https://en.touhouwiki.net/images/1/1d/Th155Reimu.png',
      description:
        'Reimu Hakurei is a person that can be described by her desires, such as the desire to be wanted, to have good food, and to find happiness. Her biggest internal conflict comes from balancing her duties as the Hakurei shrine maiden and her own desires, though she does not seem to prefer acknowledging many of her internal conflicts. Her duty as the Hakurei shrine maiden gives Reimu a sense of purpose and identity, however, it conflicts with her desires in that it distances her from others and has her dealing with incidents and other related problems on a frequent basis. Despite her duty making it seem as though she antagonizes youkai, in truth, she wishes for peace between humans and youkai. Reimu is generally a joyful and airheaded person. She’s also incredibly prideful and quite arrogant due to it. She’s often seen in a good mood until her routines are broken by some outside influence, be it a youkai or the like. She’s the type to be quite grumpy and quick to anger, but she’s also quick to forget.'
    }),

    Character.create({
      name: 'Kirisame Marisa',
      imageURL: 'https://en.touhouwiki.net/images/b/b3/Th155Marisa.png',
      description:
        'Outwardly, Marisa is an outgoing and informal individual. She socializes with many inhabitants of Gensokyo and is friendly to both human and non-humans individuals, although still remaining wary around youkai. She is quick to act if she hears or sees anything interesting; sometimes doing dangerous things to satiate her interest at the time. An example is when she follows an eagle on a whim in the middle of a blizzard.[7] She speaks in an informal manner and typically uses the sentence ending particle ze (ぜ). "Ze" used at the end of verb stems delivers a "boyish" and "impolite" sound to the listener/reader. Ze is mostly used in a context to express one\'s will to act (similar to "let\'s" in English), and using it in other cases sound somewhat unnatural, perhaps "phony" or "showy".'
    }),

    Character.create({
      name: 'Izayoi Sakuya',
      imageURL: 'https://en.touhouwiki.net/images/8/82/Th14Sakuya.png',
      description:
        "Sakuya tends to be a little spacy, but it's unknown if its just an act. Her behaviour is that of an easy-going person and, although her personality can be seen as perfectly elegant, she possesses a little deviation that she is extra cautious about: inability to eat hot foods. She uses humble speech to her mistress Remilia Scarlet and friend Patchouli Knowledge, and uses less formal speech to other people."
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
