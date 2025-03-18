
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup: React.FC = () => {
  // Website Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    'name': 'Gemini Alchemist - AI Image Editing',
    'url': 'https://gemini-alchemist.com',
    'description': 'Transform your images with AI-powered text prompts. Edit, enhance, and reimagine photos with cutting-edge AI technology.',
    'potentialAction': {
      '@type': 'SearchAction',
      'target': 'https://gemini-alchemist.com/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  // SoftwareApplication Schema
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    'name': 'Gemini Alchemist',
    'applicationCategory': 'DesignApplication',
    'operatingSystem': 'Web',
    'offers': {
      '@type': 'Offer',
      'price': '0',
      'priceCurrency': 'USD'
    },
    'description': 'AI-powered image editing tool that transforms photos using text prompts, powered by Google Gemini 2.0 Flash',
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'ratingCount': '1250'
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(softwareApplicationSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
