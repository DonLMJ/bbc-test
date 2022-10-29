export const commentIcon = 'span.gs-o-bullet__icon.gel-icon.gs-c-comment-count__icon.nw-c-comment__icon>:nth-child(16) > [data-layer="Content"]'

class Page {
    findFirstStoryWithComment() {
        cy.get(commentIcon).click()
    }
}

export const page = new Page()