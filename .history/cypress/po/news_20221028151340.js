export const commentIcon = 'span.gs-o-bullet__icon.gel-icon.gs-c-comment-count__icon.nw-c-comment__icon'
export const iFrameElem = '.ssrcss-floim3-StylediFrame'
export const commentInput = 'form.comments__input'
export const commentSignInPrompt = 'p.comments__signin--prompt'

class Page {
    clickFirstCommentableNews() {
        cy.get(commentIcon).then((allCommentableNews) => {
            if (allCommentableNews.length > 0) {
                cy.get(commentIcon).first().click()
            }
            else {
                cy.get(commentIcon).first().click()
            }
        })
        
        //cy.get(commentIcon).first().click()
    }

    findElementInIframeComments(element) {
        cy.get(iFrameElem).its('0.contentDocument').its('body').then(cy.wrap).find(element)
    }
}

export const page = new Page()

cy.get('body').then((body) => {
    if (body.find('[data-jsl10n="wikivoyage.name"]').length > 0) {
        cy.get('[data-jsl10n="wikivoyage.name"]').click()
    }
    else {
        cy.get('[data-jsl10n="wiktionary.name"]').click()
    }
})