forms.country = getCookie('_bb_country').toLowerCase() || null

var titleValueMap = {
      //addresses
      'country'      : forms.get('country'),
      'company name' : forms.get('company'),
      'first name'   : forms.get('name.first'),
      'last name'    : forms.get('name.last'),
      'full name'    : forms.get('name.first') + ' ' + forms.get('name.last'),
      'line1'        : forms.get('address.line1'),
      'line2'        : forms.get('address.line2'),
      'city'         : forms.get('address.city'),
      'state'        : forms.get('address.state'),
      'zip'          : forms.get('address.zip'),
      'email'        : forms.get('email'),
      'phone'        : forms.get('phone'),

      //cc
      'number' : forms.get('cc.number'),
      'cvv'    : forms.get('cc.cvv'),

      // take a list of titles and apply the basetitle value to each as a subprop of the map
      propagate : function (baseTitle, titleSet) {
        _.each(titleSet, function (newTitle) {
          titleValueMap[newTitle] = titleValueMap[baseTitle];
        });
      }
    }

// propagate values to alternate titles

titleValueMap.propagate('line1', ['address', 'address line 1']);

titleValueMap.propagate('line2', ['extended address', 'address line 2']);

titleValueMap.propagate('city', ['town/city']);

titleValueMap.propagate('zip', ['zip code','zipcode', 'postal', 'postcode', 'post code']);

titleValueMap.propagate('email', ['email address', 'emailaddress']);

titleValueMap.propagate('phone', ['phone number']);

titleValueMap.propagate('cvv', ['svc', 'security code']);

titleValueMap.propagate('number', ['card number']);
