export const commentIcon = 'span.gs-o-bullet__icon.gel-icon.gs-c-comment-count__icon.nw-c-comment__icon'
export const iFrameElem = '.ssrcss-floim3-StylediFrame'


class Page {
    clickFirstCommentableNews() {
        cy.get(commentIcon).first().click()
    }

    findElementInIframeComments(element) {
        cy.get('.ssrcss-floim3-StylediFrame').its('0.contentDocument').its('body').then(cy.wrap).find('p.comments__signin--prompt')

    }
}

export const page = new Page()