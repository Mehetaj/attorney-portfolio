import React from 'react';

const footerBg = '#191919';
const gold = '#bfa46b';
const textGray = '#bdbdbd';
const linkGray = '#e0e0e0';

const socialIcons = [
  { name: 'Facebook', svg: <svg width="18" height="18" fill={gold}><circle cx="9" cy="9" r="8" /></svg> },
  { name: 'LinkedIn', svg: <svg width="18" height="18" fill={gold}><rect x="2" y="2" width="14" height="14" rx="3" /></svg> },
  { name: 'Pinterest', svg: <svg width="18" height="18" fill={gold}><polygon points="9,2 16,16 2,16" /></svg> },
  { name: 'X', svg: <svg width="18" height="18" fill={gold}><path d="M3 3L15 15M15 3L3 15" stroke={gold} strokeWidth="2"/></svg> },
  { name: 'Instagram', svg: <svg width="18" height="18" fill={gold}><circle cx="9" cy="9" r="7" stroke={gold} strokeWidth="2" fill="none"/><circle cx="9" cy="9" r="3" fill={gold}/></svg> },
];

const Footer = () => (
  <footer style={{ background: footerBg, color: textGray, paddingTop: 40, paddingBottom: 0 }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
      {/* Partners Row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #333', paddingBottom: 32, marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
        {['Credit Angelio', 'KUFG', 'EUROPA EXPRESS', <span style={{ fontStyle: 'italic' }}>Azis Bank</span>, 'LBS'].map((partner, i) => (
          <div key={i} style={{ fontSize: 22, color: linkGray, opacity: 0.8 }}>{partner}</div>
        ))}
      </div>
      {/* Main Footer Content */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 40, justifyContent: 'space-between', marginBottom: 32 }}>
        {/* Logo & Desc */}
        <div style={{ flex: '1 1 220px', minWidth: 220 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
            {/* Placeholder logo */}
            <svg width="36" height="36" viewBox="0 0 36 36" fill={gold}><rect width="36" height="36" rx="6"/></svg>
            <span style={{ fontWeight: 700, fontSize: 20, color: linkGray, letterSpacing: 1 }}>ATTORNA</span>
          </div>
          <div style={{ fontSize: 13, color: textGray, marginBottom: 16 }}>
            One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into.
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            {socialIcons.map((icon, i) => (
              <a key={i} href="#" aria-label={icon.name} style={{ display: 'inline-block', opacity: 0.8 }}>{icon.svg}</a>
            ))}
          </div>
        </div>
        {/* Contact Info */}
        <div style={{ flex: '1 1 180px', minWidth: 180 }}>
          <div style={{ color: linkGray, fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Contact Info</div>
          <div style={{ fontSize: 14, marginBottom: 4 }}>Box 3233<br/>1810 Kings Way<br/>King Street, 5th Avenue, New York</div>
          <div style={{ fontSize: 14, marginBottom: 4, color: gold }}><a href="tel:+1235533455" style={{ color: gold, textDecoration: 'none' }}>+1-2355-3345-5</a></div>
          <div style={{ fontSize: 14, color: linkGray }}><a href="mailto:Contact@Attornasite.co" style={{ color: linkGray, textDecoration: 'none' }}>Contact@Attornasite.co</a></div>
        </div>
        {/* Practice Areas */}
        <div style={{ flex: '2 1 340px', minWidth: 260, display: 'flex', gap: 32 }}>
          <div>
            <div style={{ color: linkGray, fontWeight: 700, fontSize: 18, marginBottom: 12 }}>Practice Areas</div>
            <div style={{ fontSize: 14, color: linkGray, marginBottom: 6 }}>Family Violence</div>
            <div style={{ fontSize: 14, color: linkGray, marginBottom: 6 }}>Car Accident Insurance</div>
            <div style={{ fontSize: 14, color: linkGray, marginBottom: 6 }}>Public Company Fraud</div>
            <div style={{ fontSize: 14, color: linkGray, marginBottom: 6 }}>Privacy Matter</div>
            <div style={{ fontSize: 14, color: linkGray, marginBottom: 6 }}>Failure of Apple Acquisition</div>
          </div>
          <div style={{ marginTop: 38 }}>
            <div style={{ fontSize: 14, color: gold, marginBottom: 6 }}>Giving Million Air Its Wings</div>
            <div style={{ fontSize: 14, color: gold, marginBottom: 6 }}>Making Sure It's Closed</div>
            <div style={{ fontSize: 14, color: gold, marginBottom: 6 }}>Nighmare on Wall Street</div>
            <div style={{ fontSize: 14, color: gold, marginBottom: 6 }}>MaTix Tax Invation</div>
          </div>
        </div>
      </div>
    </div>
    {/* Bottom Bar */}
    <div style={{ background: '#151515', color: textGray, fontSize: 13, padding: '16px 0', marginTop: 0 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>Copyright 2025 Attorna, All Right Reserved</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href="#" style={{ color: linkGray, textDecoration: 'none' }}>Home</a>
          <a href="#" style={{ color: linkGray, textDecoration: 'none' }}>Cases</a>
          <a href="#" style={{ color: linkGray, textDecoration: 'none' }}>About</a>
          <a href="#" style={{ color: linkGray, textDecoration: 'none' }}>Legal</a>
          <a href="#" style={{ color: linkGray, textDecoration: 'none' }}>Privacy & Policy</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
