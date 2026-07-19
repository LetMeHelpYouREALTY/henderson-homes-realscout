# 🚀 Google Search Console Setup & SEO Optimization Guide

## 📋 **Step-by-Step GSC Setup**

### **1. Verify Website Ownership**

#### **Option A: HTML Tag Verification (Recommended)**
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Click "Add Property" → "Domain" or "URL prefix"
3. Enter: `https://searchforhomesinhenderson.com`
4. Choose "HTML tag" verification method
5. Copy the verification code (looks like: `<meta name="google-site-verification" content="ABC123..." />`)
6. Add it to your `<head>` section in `src/app/layout.tsx`

#### **Option B: DNS TXT Record**
1. Add TXT record to your domain's DNS
2. Name: `@` or leave blank
3. Value: Copy from GSC verification page
4. TTL: 3600 (1 hour)

### **2. Submit Sitemap to GSC**

1. **Copy Sitemap URL**: `https://searchforhomesinhenderson.com/sitemap.xml`
2. In GSC, click "Sitemaps" in left sidebar
3. Paste URL in "Add a new sitemap" field
4. Click "Submit"
5. Monitor indexing progress

### **3. Set Up User Permissions**

#### **Owner (Full Control)**
- You (website owner)
- Full access to all GSC features
- Can remove property entirely

#### **Full User (Almost Full Access)**
- Marketing team members
- Can make changes but can't remove property
- Access to most features

#### **Restricted User (View Only)**
- Analysts, consultants
- Can view data but not make changes
- Safe for external contractors

## 🔍 **Key GSC Reports for SEO**

### **Performance Report**
- **Total Clicks**: How many users clicked from search
- **Total Impressions**: How many times your site appeared in search
- **Average CTR**: Click-through rate percentage
- **Average Position**: Average ranking position

### **Core Web Vitals**
- **LCP (Largest Contentful Paint)**: Page load speed
- **CLS (Cumulative Layout Shift)**: Visual stability
- **INP (Interaction to Next Paint)**: Responsiveness

### **Index Coverage**
- **Submitted**: Pages in your sitemap
- **Indexed**: Pages Google has indexed
- **Not Indexed**: Pages with issues

## 🛠️ **SEO Optimization Actions**

### **1. Fix Indexation Issues**
1. Go to GSC → Sitemaps → Click 3 dots → "See page indexing"
2. Review "Why pages aren't indexed" table
3. Click on specific issues to see affected URLs
4. Use "Inspect URL" tool to diagnose problems
5. Click "Request Indexing" for important pages

### **2. Monitor Core Web Vitals**
1. GSC → Core Web Vitals → Open Report
2. Click on "Poor" or "Needs Improvement" categories
3. Review example URLs
4. Click "Developer Resources → PageSpeed Insights"
5. Use diagnostics to fix performance issues

### **3. Find "Striking Distance" Keywords**
1. GSC → Performance → Search results
2. Enable "Average position" metric
3. Sort by Position column
4. Focus on queries ranking 5-15
5. Optimize content for these terms

## 📊 **Daily SEO Monitoring**

### **Morning Checklist**
- [ ] Check GSC Performance report for yesterday
- [ ] Review any new indexation issues
- [ ] Check Core Web Vitals status
- [ ] Monitor crawl stats for errors

### **Weekly Tasks**
- [ ] Review "Not Indexed" pages in Sitemaps
- [ ] Analyze query performance trends
- [ ] Check for manual actions or security issues
- [ ] Export data for analysis

### **Monthly Review**
- [ ] Compare performance month-over-month
- [ ] Review and update sitemap
- [ ] Analyze competitor performance
- [ ] Plan content optimization strategy

## 🚨 **Critical Issues to Monitor**

### **Crawl Errors**
- 404 pages
- Server errors (5xx)
- DNS resolution issues
- Robots.txt access problems

### **Indexation Problems**
- Duplicate content
- Missing meta descriptions
- Broken internal links
- Mobile usability issues

### **Performance Issues**
- Slow page load times
- Layout shifts during loading
- Poor mobile experience
- JavaScript rendering problems

## 📈 **SEO Performance Metrics**

### **Target Benchmarks**
- **CTR**: >2% for organic search
- **Average Position**: <20 for target keywords
- **Core Web Vitals**: All metrics "Good"
- **Index Coverage**: >90% of submitted pages

### **Key Performance Indicators**
- Organic traffic growth
- Keyword ranking improvements
- Page speed scores
- Mobile usability scores

## 🔧 **Technical SEO Checklist**

### **On-Page Optimization**
- [ ] Unique title tags for each page
- [ ] Meta descriptions (150-160 characters)
- [ ] Proper heading structure (H1, H2, H3)
- [ ] Alt text for images
- [ ] Internal linking strategy

### **Technical Setup**
- [ ] HTTPS enabled
- [ ] Mobile-friendly design
- [ ] Fast loading times (<3 seconds)
- [ ] XML sitemap submitted
- [ ] Robots.txt accessible

### **Content Quality**
- [ ] Original, valuable content
- [ ] Regular updates
- [ ] Keyword optimization
- [ ] User engagement metrics
- [ ] Social sharing potential

## 📱 **Mobile SEO Focus**

### **Mobile-First Indexing**
- Ensure mobile version is primary
- Test mobile usability in GSC
- Optimize for mobile Core Web Vitals
- Check mobile-friendly test tool

### **Mobile Performance**
- Optimize images for mobile
- Minimize CSS and JavaScript
- Use responsive design
- Test on various devices

## 🎯 **Local SEO for Henderson Real Estate**

### **Local Search Optimization**
- Include Henderson, NV in titles
- Add neighborhood-specific content
- Optimize for local keywords
- Include local business schema markup

### **Neighborhood Pages**
- Green Valley
- Anthem
- Seven Hills
- Whitney Ranch
- Stephanie Ranch

## 📊 **Data Export & Analysis**

### **GSC Data Export**
- Export to BigQuery for long-term storage
- Use GSC API for custom dashboards
- Integrate with other SEO tools
- Create automated reports

### **Integration Tools**
- Screaming Frog (crawler)
- Semrush (keyword research)
- Ahrefs (backlink analysis)
- Google Analytics (traffic data)

## 🚀 **Next Steps**

1. **Immediate**: Set up GSC verification
2. **Week 1**: Submit sitemap and review initial data
3. **Week 2**: Fix any critical indexation issues
4. **Week 3**: Begin monitoring Core Web Vitals
5. **Month 1**: Implement first round of SEO improvements

## 📞 **Need Help?**

- **GSC Help**: [Google Search Console Help](https://support.google.com/webmasters/)
- **SEO Resources**: [Google SEO Guide](https://developers.google.com/search/docs)
- **Performance**: [PageSpeed Insights](https://pagespeed.web.dev/)

---

**Last Updated**: ${new Date().toLocaleDateString()}
**Website**: https://searchforhomesinhenderson.com
**Focus**: Henderson, NV Real Estate SEO
