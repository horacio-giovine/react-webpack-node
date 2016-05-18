const image_financial_security = require('images/aspiration_finsec_small.png')

export default function (state, action) {
  return [
    {
      title: 'Financial Security',
      what: 'A future where I only work when I want',
      why: 'I want to decide how i invest my time',
      mantra: 'I am saving now for a worry free future',
      confidence: 'High',
      color: '#5297E1',
      image: image_financial_security,
      goals: [
        {
          title: 'Own Home',
          probability: 0.87
        },
        {
          title: 'Retirement',
          probability: 0.49
        }
      ]
    }
  ]
}
