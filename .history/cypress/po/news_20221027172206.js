export const commentIcon = 'span.gs-o-bullet__icon.gel-icon.gs-c-comment-count__icon.nw-c-comment__icon'

class Page {
    clickFirstCommentableNews() {
        cy.get(commentIcon).first().click()
    }
}

export const page = new Page()