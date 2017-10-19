import matplotlib.pyplot as plt
from matplotlib import style
style.use('ggplot')
import numpy as np
from sklearn.cluster import KMeans

userA = ['m', 10, ['a', 'c', 'e', 'g', 't','m'], 5, {'a':0.3, 'b':0.15, 'c':0.05, 'e':0.2, 't':0.1, 'n':0.09, 'p':0.07, 'x':0.04}]
userC = ['m', 5, ['a', 'b', 'f', 'i', 'j', 'l', 'n', 'p', 't'], 8, {'b':0.1, 'd':0.14, 'f':0.08, 'h':0.15, 'k':0.26, 'n':0.07, 'r':0.2}]
userE = ['m', 2, ['b', 'g', 's', 'l', 'r', 'u', 'w'], 8.2, {'d':0.08, 'h':0.12, 'k':0.07, 'n':0.04, 'u':0.09, 'w':0.22, 'x':0.18, 'y':0.14, 'z':0.06}]
userG = ['m', 7, ['l','m', 'o', 's', 't', 'x', 'z'], 10, {'b':0.08, 'c':0.04, 'f':0.08, 'j':0.11, 'l':0.05, 'm':0.04, 'o':0.24, 'p':0.11, 's':0.05, 'u':0.1, 'v':0.1}]
userI = ['m', 9, ['b', 'd', 'f', 'j', 's', 'y'], 6.1, {'a':0.2, 'c':0.25, 'n':0.07, 'r':0.18, 's':0.15, 'q':0.04, 'w':0.11}]
userK = ['m', 8, ['c', 'e', 'g', 'h', 'i', 'o', 'u'], 7, {'d':0.1, 'e':0.15, 'g':0.05, 'm':0.2, 'r':0.1, 's':0.29, 't':0.07, 'z':0.04}]
userM = ['m', 6, ['d', 'f', 'i', 'k', 'l', 'm', 'p', 'q'], 4.5, {'b':0.05, 'f':0.15, 'h':0.1, 'i':0.1, 'k':0.1, 'o':0.26, 'u':0.17, 'v':0.07}]
userO = ['m', 12, ['a', 'e', 'i', 'j', 's', 'o', 'x'], 4, {'a':0.04, 'f':0.05, 'i':0.22, 'k':0.14, 'o':0.29, 'p':0.17, 'q':0.09}]
userQ = ['m', 5, ['c', 'h', 'i', 'k', 'l', 'n', 'p', 'v'], 11.3, {'b':0.1, 'c':0.1, 'e':0.1, 'g':0.17, 'h':0.2, 'l':0.1, 'n':0.07, 'q':0.16}]
userS = ['m', 6, ['a', 'b', 'c', 'e', 'f', 'j', 'k', 'm', 'r', 's'], 6.2, {'a':0.05, 'f':0.12, 'h':0.13, 'i':0.14, 'k':0.1, 'o':0.22, 'u':0.17, 'v':0.07}]
userT 
userU

userB = ['f', 14, ['d', 'f', 'g', 'h', 'k', 'l', 'o', 'p', 'r'], 6, {'a':0.1, 'd':0.35, 'e':0.05, 'g':0.12, 'h':0.08, 'k':0.1, 'r':1.2, 'y':0.08}]
userD = ['f', 7, ['h', 'k','m', 'o', 's', 't', 'v', 'x', 'z'], 10, {'c':0.08, 'd':0.3, 'h':0.14, 'l':0.05, 'n':0.12, 'o':0.05, 's':0.18, 'x':0.08}]
userF = ['f', 12, ['j', 'l', 'n', 'r', 'y', 'z'], 4, {'a':0.1, 'd':0.35, 'e':0.05, 'g':0.12, 'h':0.08, 'k':0.1, 'r':1.2, 'y':0.08}]
userH = ['f', 3, ['a', 'c', 'j','m', 'o', 'u', 'v', 'x'], 8, {'b':0.04, 'f':0.05, 'g':0.11, 'm':0.2, 'n':0.1, 'p':0.15, 'q':0.05, 't':0.15, 'v':0.15}]
userJ = ['f', 13, ['c', 'd', 'j', 'k', 'l','m', 's', 't'], 11, {'b':0.15, 'c':0.3, 'f':0.05, 'h':0.12, 'i':0.08, 'j':0.1, 'o':0.1, 'p':0.1}]
userL = ['f', 10, ['c', 'f', 'h', 'i', 'j', 'p', 'u', 'w'], 5, {'a':0.1, 'd':0.2, 'h':0.05, 'i':0.12, 'r':0.23, 't':0.13, 'w':0.12, 'z':0.05}]
userN = ['f', 4, ['b', 'g', 'k', 'm', 'o', 's', 'v'], 5, {'e':0.08, 'i':0.15, 'j':0.05, 'k':0.14, 'l':0.20, 'o':0.16, 's':0.05, 'u':0.12, 'y':0.05}]
userP = ['f', 6, ['c', 'e', 'g', 'h', 'i', 'o', 'u'], 3, {'a':0.08, 'b':0.10, 'e':0.05, 'k':0.2, 'n':0.12, 'q':0.20, 'r':0.12, 'u':0.08, 'w':0.05}]
userR = ['f', 8, ['e', 'f', 'h', 'l', 'n', 'p', 'q'], 4.5, {'a':0.1, 'e':0.2, 'f':0.05, 'n':0.12, 's':0.23, 'v':0.13, 'y':0.17}]


queue = [userA, userB, userC, userD, userE, userF, userG, userH, userI, userJ, userK, userL, userM, userN]


#for one male:
for user in queue:
  if user[0] == 'm':
    print (user)
    females = []   #all the females in the graph

    for other_user in queue:
      if other_user[0] == 'f':
        female = []   #individual female
        #x coord:
        female.insert(0, (16 - abs(other_user[3] - user[1])) / 16)

        #y coord:
        interest_score = 0
        for interest in other_user[2]:
          if interest in user[4]:
            interest_score += user[4][interest]
        female.insert(1, interest_score)

        #put female into females
        females.append(female)
        #print (female)

    X = np.array(females)

    print(females)
    
    #plt.scatter(X[:,0], X[:,1], s=20)
    #plt.show()
    
    clf = KMeans(n_clusters=4)
    clf.fit(X)
    centroids = clf.cluster_centers_
    labels = clf.labels_

    colors = ['g.', 'r.', 'c.', 'b.']

    for i in range (len(X)):
      plt.plot(X[i][0], X[i][1], colors[labels[i]], markersize = 10)
    plt.scatter(centroids[:,0], centroids[:,1], marker='x', s=50, linewidths = 5)
    plt.show()
