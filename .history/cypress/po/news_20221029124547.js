export const commentIcon = 'span.gs-o-bullet__icon.gel-icon.gs-c-comment-count__icon.nw-c-comment__icon'
export const infoList = 'ul.gs-o-list-inline.gs-o-list-inline--divided.gel-brevier.gs-u-mt-'
export const iFrameElem = '.ssrcss-floim3-StylediFrame'
export const commentInput = 'form.comments__input'
export const commentSignInPrompt = 'p.comments__signin--prompt'

class Page {
    clickFirstCommentableNews() {
            cy.get(infoList).each(($el) => {
                if (cy.wrap($el).find('li.nw-c-promo-meta').length = 3) {
                    cy.get(commentIcon).first().click()
                }
                else {
                    cy.log('No commentable news found')
                    cy.pause()
                }
            })

        //case with no condition
        //cy.get(commentIcon).first().click()
    }

    findElementInIframeComments(element) {
        cy.get(iFrameElem).its('0.contentDocument').its('body').then(cy.wrap).find(element)
    }
}

export const page = new Page()

