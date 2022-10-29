export const commentIcont = 'div.gs-o-bullet__icon gel-icon gs-c-comment-count__icon nw-c-comment__icon'

class Page {
    findStoriesWithComments() {
        cy.get(commentIcont)
    }
}

export const page = new Page()