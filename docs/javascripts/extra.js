// ============================================================
// CraftMenu Wiki - Custom JavaScript Enhancements
// ============================================================

// Smooth scroll for anchor links
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll to anchors
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        // Update URL without jumping
        history.pushState(null, null, this.getAttribute('href'));
      }
    });
  });

  // Add hover effect to code blocks
  document.querySelectorAll('.highlight').forEach(function(block) {
    block.addEventListener('mouseenter', function() {
      this.style.boxShadow = '0 8px 25px rgba(124, 58, 237, 0.25)';
    });
    block.addEventListener('mouseleave', function() {
      this.style.boxShadow = '';
    });
  });

  // Animate elements on scroll
  var observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  var fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe headings for fade-in effect
  document.querySelectorAll('h2, h3').forEach(function(heading) {
    heading.style.opacity = '0';
    heading.style.transform = 'translateY(20px)';
    heading.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    fadeInObserver.observe(heading);
  });
});

// Log successful load
console.log('CraftMenu Wiki - Elegant Purple/Gold Theme loaded!');
