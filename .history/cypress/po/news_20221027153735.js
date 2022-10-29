export const commentIcon = 'span.gs-o-bullet__icon.gel-icon.gs-c-comment-count__icon.nw-c-comment__icon'

class Page {
    findFirstStoryWithComment() {
        cy.get(commentIcon).find(':nth-child(15) > [data-layer="Content"]')
    }
}

export const page = new Page()