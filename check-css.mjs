async function test() {
  const html = await fetch('http://localhost:3000/').then(r => r.text());
  const cssLinks = [...html.matchAll(/href="([^"]+\.css[^"]*)"/g)].map(m => m[1]);
  console.log('CSS links:', cssLinks);
  for (const link of cssLinks) {
    const fullUrl = link.startsWith('http') ? link : 'http://localhost:3000' + link;
    const css = await fetch(fullUrl).then(r => r.text());
    console.log(link, 'length:', css.length);
    console.log('Includes 1A56DB:', css.toLowerCase().includes('1a56db'));
    console.log('Includes D1F526:', css.toLowerCase().includes('d1f526'));
    console.log('Sample CSS snippet:', css.slice(0, 300));
  }
}
test().catch(console.error);
