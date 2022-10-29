export const commentIcont = 'a#gs-o-bullet gs-o-bullet-.gs-c-comment-count.nw-o-link-split__anchor.nw-c-comment'
class Page {
    findStoriesWithComments() {
        cy.get(commentIcont).should('have.length', 1)
    }
}

export const page = new Page()