export const commentIcont = 'ul.gs-o-list-inline gs-o-list-inline--divided gel-brevier gs-u-mt-'
//cy.get('#nw-c-topstories-domestic > .gel-wrap > .nw-c-top-stories--standard > .gel-4\/5\@xxl > .gel-layout--equal > :nth-child(3) > .gs-c-promo > .gs-c-promo-body > .gs-o-list-inline > :nth-child(3) > .gs-o-bullet > :nth-child(1)')
class="gs-o-list-inline gs-o-list-inline--divided gel-brevier gs-u-mt-"
class Page {
    findStoriesWithComments() {
        cy.get(commentIcont)
    }
}

export const page = new Page()