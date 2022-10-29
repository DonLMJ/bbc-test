export const commentIcon = 'span.gs-o-bullet__icon.gel-icon.gs-c-comment-count__icon.nw-c-comment__icon'

class Page {
    clickFirstCommentableNews() {
        cy.get(commentIcon).first().click()
    }
    getiFrameBody() {
        cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').its('body').then(cy.wrap)
    }
}

export const page = new Page()