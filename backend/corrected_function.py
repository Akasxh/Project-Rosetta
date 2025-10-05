def get_feature_contributions(model, instance, feature_names, class_names):
    """
    Calculate feature contributions for Gaussian Naive Bayes model
    """
    import numpy as np
    import pandas as pd
    
    predicted_class = model.predict([instance])[0]
    contributions = []
    
    for i, feature_value in enumerate(instance):
        # Use var_ for newer scikit-learn versions
        variance = model.var_
        means = model.theta_
        
        log_likelihood_class_0 = -0.5 * np.log(2 * np.pi * variance[0, i]) - \
                                 ((feature_value - means[0, i]) ** 2 / (2 * variance[0, i]))
        log_likelihood_class_1 = -0.5 * np.log(2 * np.pi * variance[1, i]) - \
                                 ((feature_value - means[1, i]) ** 2 / (2 * variance[1, i]))
        
        contribution = abs(log_likelihood_class_1 - log_likelihood_class_0)
        contributions.append((feature_names[i], contribution))
    
    contributions.sort(key=lambda x: x[1], reverse=True)
    top_features_df = pd.DataFrame(contributions[:10], columns=['Feature', 'Contribution'])
    
    return top_features_df, class_names[predicted_class]