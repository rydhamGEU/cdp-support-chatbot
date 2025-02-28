const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const axios = require('axios');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Documentation URLs
const docs = {
  segment: 'https://segment.com/docs/',
  mparticle: 'https://docs.mparticle.com/',
  lytics: 'https://docs.lytics.com/',
  zeotap: 'https://docs.zeotap.com/home/en-us/',
};

// Scrape documentation
const scrapeDocs = async (url) => {
  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);
    return $('body').text(); // Extract all text from the page
  } catch (error) {
    console.error(`Error scraping ${url}:`, error);
    return '';
  }
};

// Keyword-based response
const getResponse = (query, docsText) => {
  if (query.toLowerCase().includes('segment')) {
    return docsText.segment.includes('source')
      ? 'To set up a new source in Segment, follow the steps in the documentation.'
      : 'No relevant information found.';
  }
  if (query.toLowerCase().includes('mparticle')) {
    return docsText.mparticle.includes('user profile')
      ? 'To create a user profile in mParticle, follow the steps in the documentation.'
      : 'No relevant information found.';
  }
  if (query.toLowerCase().includes('lytics')) {
    return docsText.lytics.includes('audience segment')
      ? 'To build an audience segment in Lytics, follow the steps in the documentation.'
      : 'No relevant information found.';
  }
  if (query.toLowerCase().includes('zeotap')) {
    return docsText.zeotap.includes('integrate data')
      ? 'To integrate your data with Zeotap, follow the steps in the documentation.'
      : 'No relevant information found.';
  }
  return 'Sorry, I could not find an answer to your question.';
};

// Chat endpoint
app.post('/chat', async (req, res) => {
  const { query } = req.body;
  const docsText = {
    segment: await scrapeDocs(docs.segment),
    mparticle: await scrapeDocs(docs.mparticle),
    lytics: await scrapeDocs(docs.lytics),
    zeotap: await scrapeDocs(docs.zeotap),
  };
  const response = getResponse(query, docsText);
  res.json({ response });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});