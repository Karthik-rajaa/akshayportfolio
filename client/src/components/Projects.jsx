import React, { useState } from 'react';

const blogSamples = [
  {
    title: 'Sample 1',
    content: (
      <>
        <h2 className="purple-text">Digital Detox & Mental Minimalism</h2>
        <h3 className="purple-text" style={{ marginBottom: '1rem' }}>The Quiet Joy of Logging Off: A Digital Detox That Works</h3>
        <p>
          I didn’t realize I was addicted to noise until I sat in silence and felt uncomfortable.<br /><br />
          It wasn’t just my phone. It was the constant scrolling, the tabs I kept open in my brain, and the weight of unread messages I had no energy to answer.<br /><br />
          So, I did something radical.<br />
          I logged out. Not forever. Just for a day.<br /><br />
          I told no one. I deleted the apps. I shut down my laptop. For the first hour, I kept checking my pockets out of habit. For the second, I stared out the window and watched the wind move the trees. By evening, I felt like a guest in my own life—quiet, unhurried, real.<br /><br />
          We think logging off means missing out. But sometimes, it’s how we return to ourselves.<br /><br />
          <span className="highlight">A digital detox doesn’t need to be dramatic. Just intentional.</span><br /><br />
          <b className="purple-text">Try this:</b> one hour a day without your phone. No scrolling. No checking.<br />
          Just breathe, move, notice.<br /><br />
          The world is still here. So are you.
        </p>
      </>
    ),
  },
  {
    title: 'Sample 2',
    content: (
      <>
        <h2 className="purple-text">Psychology of Money for Creatives</h2>
        <h3 className="purple-text" style={{ marginBottom: '1rem' }}>Money Blocks: The Stories Artists Are Afraid to Rewrite</h3>
        <p>
          <span className="highlight">"I’m not doing it for the money."</span><br /><br />
          How often have you heard a creative say that? How often have you said it yourself?<br /><br />
          There’s a quiet shame that many creatives carry when it comes to money. We’ve been taught to believe that true art is born in struggle—and that asking to be paid makes us less noble, less pure.<br /><br />
          But here’s the truth:<br />
          <span className="highlight">Money is not the enemy. The stories around it are.</span><br /><br />
          When you were young, did you hear things like:<br />
          <ul style={{ marginLeft: '1.2em', marginBottom: '1em' }}>
            <li>“Artists never make real money.”</li>
            <li>“You can’t survive doing what you love.”</li>
            <li>“Choose passion or stability — not both.”</li>
          </ul>
          These ideas turn into inner blocks. You start underpricing your work. You feel guilty charging fair rates. You sabotage success because it feels like betrayal.<br /><br />
          To heal your relationship with money, you must rewrite those stories.<br /><br />
          <span className="highlight">You are allowed to be creative and well-paid.</span><br />
          <span className="highlight">You are allowed to live with joy and financial ease.</span><br />
          <span className="highlight">Your art doesn’t become less meaningful because you value your worth.</span>
        </p>
      </>
    ),
  },
  {
    title: 'Sample 3',
    content: (
      <>
        <h2 className="purple-text">Fiction blog series or Medium publication</h2>
        <h3 className="purple-text" style={{ marginBottom: '1rem' }}>Dead Air</h3>
        <p>
          <span className="highlight">Genre:</span> Psychological Thriller<br />
          <span className="highlight">Setting:</span> A crumbling city with nightly power cuts<br />
          <span className="highlight">Hook:</span> Every night at 1:04 a.m., a voice broadcasts on a dead radio frequency — and someone nearby disappears.<br />
          <span className="highlight">Ideal for:</span> Fiction blog series or Medium publication<br /><br />
          <b className="purple-text">Episode 1 — “The First Voice”</b><br /><br />
          At 1:03 a.m., the power went out again.<br />
          A soft click — like a throat clearing — came from the old radio, even though it had no batteries.<br />
          And then, a voice.<br />
          <span className="highlight">“If you're hearing this, don’t open the door. Not yet.”</span><br />
          Lyra froze.<br />
          She hadn’t turned the radio on in weeks.<br />
          Hadn’t touched it since last November, when her father vanished the same night the city went dark.<br />
          Another voice came — not the same one.<br />
          Deeper. Male. Static-cracked.<br />
          <span className="highlight">“She’s awake. You didn’t stop her. Your fault now.”</span><br />
          A slam from downstairs.<br />
          Lyra grabbed the flashlight and didn’t breathe.<br /><br />
          <span className="highlight">[To Be Continued…]</span><br /><br />
          Want the next chapter?<br />
          <span className="highlight">Subscribe to get “Dead Air” delivered weekly.</span>
        </p>
      </>
    ),
  },
];

const bookSamples = [
  {
    title: 'Sample 1',
    content: (
      <>
        <h2 className="purple-text">FICTION BOOK</h2>
        <h3 className="purple-text" style={{ marginBottom: '1rem' }}>Ash Below</h3>
        <p>
          <span className="highlight">Genre:</span> Urban Fantasy / Supernatural Mystery<br /><br />
          <b className="purple-text">Chapter 1: Ashes Don't Lie</b><br /><br />
          Ezra lit the cigarette on his third try.<br />
          He wasn’t a smoker — not really — but dead gods didn’t leave calling cards anymore. Just ash. And that ash? It needed fire to talk.<br />
          The smoke curled unnaturally, spelling symbols in the air he couldn’t read… but someone could.<br />
          Probably the girl bleeding out in his bathtub.<br />
          “You’re late,” she’d whispered before collapsing.<br />
          Now, he had twelve hours to find a god no one worshipped anymore — or risk becoming one.<br />
          And Ezra didn’t want that kind of power.<br />
          He just wanted silence.
        </p>
      </>
    ),
  },
];

const Projects = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [activeSection, setActiveSection] = useState(null);

  const handleBlogClick = (idx) => {
    setSelectedBlog(idx);
    setActiveSection('blog');
    setSelectedBook(null);
  };

  const handleBookClick = (idx) => {
    setSelectedBook(idx);
    setActiveSection('book');
    setSelectedBlog(null);
  };

  let content = null;
  if (activeSection === 'blog' && selectedBlog !== null) {
    content = blogSamples[selectedBlog].content;
  } else if (activeSection === 'book' && selectedBook !== null) {
    content = bookSamples[selectedBook].content;
  }

  const showListCentered = !content;

  return (
    <section className="home-section">
      <div className="home-card" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column', justifyContent: showListCentered ? 'center' : undefined, alignItems: showListCentered ? 'center' : undefined }}>
        <h1 className="home-title purple-text" style={{ marginBottom: '1.5rem', textAlign: 'center' }}>Projects</h1>
        <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: showListCentered ? 'center' : undefined, alignItems: showListCentered ? 'center' : undefined, minHeight: '320px', width: '100%' }}>
          <div className={showListCentered ? 'projects-list-center' : ''} style={{ minWidth: 180 }}>
            <span className="project-section-title">Blog Samples</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {blogSamples.map((sample, idx) => (
                <li key={idx}>
                  <button
                    className={`project-list-btn${activeSection === 'blog' && selectedBlog === idx ? ' selected' : ''}`}
                    onClick={() => handleBlogClick(idx)}
                  >
                    {sample.title}
                  </button>
                </li>
              ))}
            </ul>
            <span className="project-section-title" style={{ marginTop: '2rem', display: 'inline-block' }}>Book Samples</span>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {bookSamples.map((sample, idx) => (
                <li key={idx}>
                  <button
                    className={`project-list-btn${activeSection === 'book' && selectedBook === idx ? ' selected' : ''}`}
                    onClick={() => handleBookClick(idx)}
                  >
                    {sample.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {content && (
            <div style={{ flex: 1, minWidth: 250 }}>
              <div className="project-sample-card">
                {content}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects; 