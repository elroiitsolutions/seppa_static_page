const qs = require('qs');
const token = '603cacbc9873499b962b6c9614e49c1bc3d2d2c635f968472a725489c867d46eec3f0cf2fd233e399c633169d2371df74cb2363851433466003a8981f6ef6e314781c2dc8fe145d1c364fbbdcfbbdc6b2a715d3e92cfa85110db8c5e3a4b68519af48df3a679e98f69ca298203f0c5b8b69b99600591c1ce18d07e2fe3df4dd1';

const query = {
  filters: { full_path: { $eq: '/pet' } },
  locale: 'en',
  populate: {
    trending_articles: {
      populate: {
        hero: { populate: '*' }
      }
    }
  }
};

const queryString = qs.stringify(query, { encodeValuesOnly: true });

fetch(`http://localhost:1337/api/pages?${queryString}`, {
  headers: { 'Authorization': `Bearer ${token}` }
}).then(r => r.json()).then(d => {
  if (d.data && d.data.length > 0) {
    console.log(JSON.stringify(d.data[0].trending_articles, null, 2));
  } else {
    console.log("No data found");
  }
});
