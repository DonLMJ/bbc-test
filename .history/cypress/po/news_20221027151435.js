export const commentIcon = '#nw-c-topstories-domestic > .gel-wrap > .nw-c-top-stories--standard > .gel-4\/5\@xxl > .gel-layout--equal > :nth-child(3) > .gs-c-promo > .gs-c-promo-body > .gs-o-list-inline > :nth-child(3) > .gs-o-bullet > :nth-child(1)'

class Page {
    findStoriesWithComments() {
        cy.get(commentIcon).should('have.length', 1)
    }
}

export const page = new Page()