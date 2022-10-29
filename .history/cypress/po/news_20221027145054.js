export const commentIcont = '#nw-c-topstories-england'
//cy.get('#nw-c-topstories-domestic > .gel-wrap > .nw-c-top-stories--standard > .gel-4\/5\@xxl > .gel-layout--equal > :nth-child(3) > .gs-c-promo > .gs-c-promo-body > .gs-o-list-inline > :nth-child(3) > .gs-o-bullet > :nth-child(1)')
//document.querySelector("#nw-c-topstories-england > div > div > div.gel-layout__item.gel-4\\/5\\@xxl.nw-o-keyline\\+\\@m.nw-o-no-keyline\\@xxl > div > div:nth-child(3) > div > div.gs-c-promo-body.gel-1\\/2\\@xs.gel-1\\/1\\@m.gs-u-mt\\@m > ul")
class Page {
    findStoriesWithComments() {
        cy.get(commentIcont)
    }
}

export const page = new Page()